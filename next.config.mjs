/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
  return [
    // Tempest-blue
    {
      source: '/reniton-souza',
      destination: 'https://api.whatsapp.com/send?phone=5528999796807&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20do%20Tempest%20Blue.',
      permanent: true,
    },
    // Vicent-Black
    {
      source: '/gabriel-balbino',
      destination: 'https://api.whatsapp.com/send?phone=5528999919177&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20do%20Vicent%20Black.',
      permanent: true,
    },
    //Lunar
    {
      source: '/romulo-oliosa',
      destination: 'https://api.whatsapp.com/send?phone=5528999832160&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20do%20Lunar%20.',
      permanent: true
    }
  ]
},
};



export default nextConfig;
