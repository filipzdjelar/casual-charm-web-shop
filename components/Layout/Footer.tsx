const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-8 py-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-[#85144B]">Be Trendy Store</span>{' '}
          <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
