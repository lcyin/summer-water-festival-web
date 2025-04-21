import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin = () => {
  const normalSold = 120;
  const vipSold = 30;
  const normalMax = 150;
  const vipMax = 50;
  const totalRevenue = (normalSold * 30) + (vipSold * 50);

  const downloadCSV = () => {
    const csvData = `Type, Sold, Remaining\nNormal, ${normalSold}, ${normalMax - normalSold}\nVIP, ${vipSold}, ${vipMax - vipSold}`;
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sales-data.csv';
    a.click();
  };

  return (
    <>
      <Header />
      <main className="container">
        <h2>Admin Dashboard</h2>
        <div className="stats">
          <div>Normal Sold: {normalSold}/{normalMax}</div>
          <div>VIP Sold: {vipSold}/{vipMax}</div>
          <div>Total Revenue: ${totalRevenue}</div>
        </div>
        <button onClick={downloadCSV}>Download Sales Data (CSV)</button>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
