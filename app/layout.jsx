import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import "./globals.css";



export const metadata = {
  title: "Prident Power Solutions | Solar Power Plant Engineering & Commissioning India",
  description: "Leading solar engineering firm specialized in commissioning, O&M, and project management. Over 150MW+ installed nationwide with professional engineering standards.",
  keywords: [
    // Core Services
    "Solar Power Plant Commissioning", "Solar O&M Services India", "Solar EPC Solutions", 
    // Specialized Engineering
    "On-Grid Solar Installation", "Hybrid Solar Systems Engineering", "Solar Project Management",
    // Industry Milestones
    "150MW Solar Module Mounting", "100MW DC Solar Work", "Solar Plant AMC Services",
    // Authority & Trust
    "Professional Solar Engineers", "Solar Subsidy Consultation", "Prident Power Solutions"
  ],
};

export default function RootLayout({children}) {
  return (

    <html lang="en">
      <body className="antialiased font-sans">
        {/* <Header/>
        <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>

  );
}