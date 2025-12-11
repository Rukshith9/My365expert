import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function EmailTemplate(props: EmailTemplateProps) {
  const { firstName, lastName, email, message } = props;
  return (
    <div>
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName}</h1>
      <h1>Email: {email}</h1>
      <h1>Message: {message}</h1>
    </div>
  );
}
