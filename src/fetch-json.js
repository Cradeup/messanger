export const fetchJSON = (...params) => fetch(...params).then(response => response.json());
