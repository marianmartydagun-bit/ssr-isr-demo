
import pool from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Student = {
  id: number;
  full_name: string;
  course: string;
  year_level: number;
};

export default async function SSRPage() {
  let students: Student[] = [];
  let errorMessage = "";

  try {
    const [rows] = await pool.query(
      "SELECT id, full_name, course, year_level FROM students ORDER BY id"
    );

    students = rows as Student[];
 } catch (error) {
  console.error("MySQL error:", error);
  errorMessage =
    error instanceof Error
      ? `Database error: ${error.message}`
      : "Unknown database error.";
}

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>SSR - Student Records</h1>
      <p>
        This page fetches student records from MySQL
        whenever the page is requested.
      </p>

      <nav style={{ margin: "20px 0" }}>
        <Link href="/isr">Visit the ISR Page</Link>
      </nav>

      {errorMessage ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : (
        <>
          <p>Total students: {students.length}</p>

          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              maxWidth: "700px",
            }}
          >
            <thead>
              <tr>
                <th style={cellStyle}>ID</th>
                <th style={cellStyle}>Full Name</th>
                <th style={cellStyle}>Course</th>
                <th style={cellStyle}>Year Level</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td style={cellStyle}>{student.id}</td>
                  <td style={cellStyle}>{student.full_name}</td>
                  <td style={cellStyle}>{student.course}</td>
                  <td style={cellStyle}>{student.year_level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}

const cellStyle = {
  border: "1px solid #999",
  padding: "10px",
  textAlign: "left" as const,
};
