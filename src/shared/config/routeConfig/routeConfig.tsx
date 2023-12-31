import { IpadPage } from "pages/IpadPage";
import { IphonePage } from "pages/IphonePage";
import { MacPage } from "pages/MacPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProductDetailsPage } from "pages/ProductDetailsPage";
import { StorePage } from "pages/StorePage";
import { WatchPage } from "pages/WatchPage";
import { type RouteProps } from "react-router-dom";

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  STORE = "store",
  MAC = "mac",
  IPHONE = "iphone",
  IPAD = "ipad",
  WATCH = "watch",
  NOT_FOUND = "not_found",
  PRODUCT_DETAILS = "product_details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.STORE]: "/store",
  [AppRoutes.MAC]: "/apple-mac",
  [AppRoutes.IPHONE]: "/apple-iphone",
  [AppRoutes.IPAD]: "/apple-ipad",
  [AppRoutes.WATCH]: "/apple-watch",
  [AppRoutes.PRODUCT_DETAILS]: "/products/", // + :id
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.STORE]: {
    path: RoutePath.store,
    element: <StorePage />,
  },
  [AppRoutes.MAC]: {
    path: RoutePath.mac,
    element: <MacPage />,
  },
  [AppRoutes.IPHONE]: {
    path: RoutePath.iphone,
    element: <IphonePage />,
  },
  [AppRoutes.IPAD]: {
    path: RoutePath.ipad,
    element: <IpadPage />,
  },
  [AppRoutes.WATCH]: {
    path: RoutePath.watch,
    element: <WatchPage />,
  },
  [AppRoutes.PRODUCT_DETAILS]: {
    path: RoutePath.product_details + ":id",
    element: <ProductDetailsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
