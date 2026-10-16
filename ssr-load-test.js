
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const response = http.get('http://localhost:3000/ssr');

  check(response, {
    'status is 200': (r) => r.status === 200,
    'page contains student records': (r) =>
      r.body.includes('SSR - Student Records'),
  });

  sleep(1);
}
