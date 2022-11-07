import React, { useState, useEffect } from "react";

function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <>
      <footer className="bg-black text-white h-[100px] pt-10 font-medium text-center">
        Skrint.Dev &copy; {date} - All right reserved
      </footer>
    </>
  );
}
export default Footer;
