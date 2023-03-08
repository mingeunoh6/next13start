import styled from 'styled-components';

import { Head } from '@/components';
import { MainLayout } from '@/layouts';

const Button = styled.div`
  width: 100px;
  height: 120px;
  background-color: blue;
`;

export default function HomePage() {
  return (
    <>
      <Head />
      <MainLayout>
        <section className="p-8 flex flex-col h-full justify-center">
          <h1 className="text-3xl font-bold font-poppins">Next Starter ⚡</h1>
          <p className="text-lg">
            A highly opinionated and complete starter for Next.js projects ready
            to production
          </p>
          <Button />
          <Button />
        </section>
      </MainLayout>
    </>
  );
}
