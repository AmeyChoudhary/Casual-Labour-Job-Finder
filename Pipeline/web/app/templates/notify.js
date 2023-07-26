const notifyuser = async (number) => {
  const path = '../static/job_response_' + number + '.txt';
  const response = await fetch(path);
  const data = await response.text();
  const dataall = JSON.parse(data);
  console.log(dataall);

  const graphqlUrl = 'http://localhost:4000/graphql';

  const response2 = await fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation($input: ResponsesInput!) {
          createResponse(input: $input) {
            id
            date
            phonenumber
            name
            previoushires
            status
            jobid
            createdAt
          }
        }
      `,
      variables: {
        input : {
          name: dataall.name,
          jobid: dataall.jobid,
          username: dataall.username,
          createdAt: dataall.createdAt,
          date: dataall.date,
      }
      }
    })
    
  });

  const result = await response2.json();
  console.log(result);
};

// Get the button elements from the HTML
const job_response_1 = document.getElementById('job_response_1');
const job_response_2 = document.getElementById('job_response_2');
const job_response_3 = document.getElementById('job_response_3');

// Add event listeners to the button elements
job_response_1.addEventListener('click', () => {
  notifyuser(1);
});

job_response_2.addEventListener('click', () => {
  notifyuser(2);
});

job_response_3.addEventListener('click', () => {
  notifyuser(3);
});

