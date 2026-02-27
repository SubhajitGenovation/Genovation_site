import ProductsPanel from "./panels/ProductsPanel";
import PlatformPanel from "./panels/PlatformPanel";
import SecurityPanel from "./panels/SecurityPanel";
import IndustriesPanel from "./panels/IndustriesPanel";
import CompanyPanel from "./panels/CompanyPanel";

const PANELS = {
  products: ProductsPanel,
  platform: PlatformPanel,
  security: SecurityPanel,
  industries: IndustriesPanel,
  company: CompanyPanel,
};

export default function MegaMenu({ active, close }) {
  if (!active) return null;

  const Panel = PANELS[active];

  return (
    <div
      className="fixed top-[76px] left-0 right-0 bg-[#faf9f7] border-t shadow-xl z-40"
      onMouseLeave={close}
    >
      <div className="max-w-7xl mx-auto p-10 no-scrollbar">
        <Panel />
      </div>
    </div>
  );
}
