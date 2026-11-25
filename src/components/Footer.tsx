export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} DuySport Store · Chuyên giày đá banh chính hãng</p>
        <p>Hotline: 1900 6868 · Email: cskh@duysport.vn</p>
      </div>
    </footer>
  );
}