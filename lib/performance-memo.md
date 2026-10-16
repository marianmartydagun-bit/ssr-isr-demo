Name of Student/s:                 MAR-IAN M. DAGUN 
Contact of Student/s: 	09109168284 | marianmartydagun@gmail.com
Program, Section, Subject:     	MSIT | IT 212
Sem & School Year:	1st Sem SY 2026-2027
 
Setup Process
A simple Next.js application was developed with two pages: Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR). The SSR page retrieves student records from a MySQL database whenever a request is made. The ISR page displays generated content that can be periodically regenerated. The application was tested locally using a web browser and k6 for load testing.
Load Test Results
The SSR page was tested using k6 with 10 virtual users for 30 seconds. The test recorded an average response time of [insert actual value], a total of [insert request count] HTTP requests, and a failed request rate of [insert actual percentage]. These measurements provide an overview of the SSR page's performance under the selected test conditions.
Observed Performance Differences
SSR retrieves data from the database when requests are processed, which can increase server workload and response time depending on database performance and concurrent traffic. ISR can serve previously generated content, reducing the need to regenerate the page for every request. However, a fair performance comparison requires testing both pages under similar conditions. The results should be interpreted as observations from a local test rather than a measure of production performance.



