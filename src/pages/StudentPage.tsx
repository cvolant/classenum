import React from 'react';
import PageLayout from '../components/PageLayout';

type IStudentPageProps = {
  match: {
    params: {
      slug: string;
    };
  };
};

const StudentPage: React.FC<IStudentPageProps> = ({ match: { params: { slug } } }) => (
  <PageLayout title="Eleve" subtitle={slug}>
    <p>
      {slug}
    </p>
  </PageLayout>
);

export default StudentPage;
