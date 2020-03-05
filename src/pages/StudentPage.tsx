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
    <iframe
      allow="autoplay; encrypted-media;"
      allowFullScreen
      frameBorder="0"
      scrolling="no"
      src="https://www.youtube.com/embed/0rxiKoCv-98?autoplay=1&amp;start=538&amp;mute=1&amp;controls=0"
      title="screen"
    />
  </PageLayout>
);

export default StudentPage;
