import React from 'react';
import Page from './(front-page)/home/page';
import { redirect } from 'next/navigation';

function page() {
  redirect("/home")
  return (
    <>
      <Page/>
    </>
  );
}

export default page;