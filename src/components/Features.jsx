import React from 'react';
import './Styling/HomePage.css';

const features = [
  "1. Secure login and authentication for both patients and doctors",
  "2. The ability to add, view, and edit patient records, including medical history, medication lists, test results, and allergies",
  "3. Integration with other medical systems, such as electronic health records, to streamline information exchange",
  "4. Automated reminders for patients to schedule appointments, take medication, or complete other tasks related to their healthcare",
  "5. Analytics and reporting features to track patient outcomes, monitor trends, and identify opportunities for improvement",
  "6. Compliance with relevant data protection regulations, such as HIPAA or GDPR, to ensure patient privacy and security",
  "7. A mobile-responsive design that allows for easy access and use on smartphones and tablets"
];

function Features() {
  return (
    <div className="Features text-white">
      <h1 className='text-[30px] semi-bold poppins'>Features of our Patient Record Software:</h1>
      <ul>
        {features.map((feature) => (
          <li className='List font-poppins'>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
