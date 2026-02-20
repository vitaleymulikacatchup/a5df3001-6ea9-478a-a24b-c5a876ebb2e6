"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ShopPage() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    if (isLoading) {
        return (
            <ThemeProvider
                defaultButtonVariant="hover-bubble"
                defaultTextAnimation="reveal-blur"
                borderRadius="pill"
                contentWidth="compact"
                sizing="largeSmall"
                background="circleGradient"
                cardStyle="inset"
                primaryButtonStyle="diagonal-gradient"
                secondaryButtonStyle="layered"
                headingFontWeight="bold"
            >
                <ReactLenis root>
                    <div id="navbar" data-section="navbar">
                        <NavbarLayoutFloatingOverlay
                            brandName="Superkot"
                            navItems={[
                                { name: "Home", id: "/" },
                                { name: "Shop", id: "/shop" },
                            ]}
                            button={{ text: "Cart", onClick: () => {} }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
                    <div id="footer" data-section="footer">
                        <FooterLogoReveal
                            logoText="Superkot Fan Club"
                            leftLink={{ text: "Terms of Service", href: "#" }}
                            rightLink={{ text: "Privacy Policy", href: "#" }}
                        />
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider
            defaultButtonVariant="hover-bubble"
            defaultTextAnimation="reveal-blur"
            borderRadius="pill"
            contentWidth="compact"
            sizing="largeSmall"
            background="circleGradient"
            cardStyle="inset"
            primaryButtonStyle="diagonal-gradient"
            secondaryButtonStyle="layered"
            headingFontWeight="bold"
        >
            <ReactLenis root>
                <div id="navbar" data-section="navbar">
                    <NavbarLayoutFloatingOverlay
                        brandName="Superkot"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "Shop", id: "/shop" },
                        ]}
                        button={{ text: "Cart", onClick: () => {} }}
                    />
                </div>
                <div id="product-catalog" data-section="product-catalog">
                <ProductCatalog
                    layout="page"
                    products={products}
                    searchValue={search}
                    onSearchChange={setSearch}
                    searchPlaceholder="Search products..."
                    filters={filters}
                    emptyMessage="No products found"
                />
                </div>
                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Superkot Fan Club"
                        leftLink={{ text: "Terms of Service", href: "#" }}
                        rightLink={{ text: "Privacy Policy", href: "#" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
