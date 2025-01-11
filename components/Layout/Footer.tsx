const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-8 py-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-[#85144B]">Casual Charm</span> Store All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
