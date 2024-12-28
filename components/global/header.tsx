import { AppContainer } from "./app-container";
import { SubNavigation } from "./sub-navigation";
import { SupNavigation } from "./sup-navigation";

export const Header = () => {
  return (
    <header className="pb-2">
      <AppContainer className="p-0">
        <SupNavigation />
        <SubNavigation />
      </AppContainer>
    </header>
  );
};
