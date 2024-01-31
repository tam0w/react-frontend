import image from "@/assets/greensmol.png";
export function Navbar({ logoSrc, onSignOut }) {

  return (
      <div className="flex items-center justify-between px-4 py-2 bg-card/20">
          <img src={image} alt="Greensmol" className="h-12 mt-4 my-2"/>
      </div>
  );
};

