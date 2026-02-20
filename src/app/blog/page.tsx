"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

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
                <div id="nav" data-section="nav">
                    <NavbarLayoutFloatingOverlay
                        brandName="Superkot"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "Legend", id: "legend" },
                            { name: "Skills", id: "skills" },
                            { name: "Stats", id: "stats" },
                            { name: "Fans", id: "fans" },
                            { name: "Contact", id: "contact" },
                        ]}
                        button={{ text: "Get Schooled" }}
                    />
                </div>

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <div id="blog" data-section="blog">
                            <BlogCardTwo
                                blogs={posts}
                                title="Latest Articles"
                                description="Insights and updates from our team"
                                animationType="slide-up"
                                textboxLayout="default"
                                useInvertedBackground={false}
                                carouselMode="buttons"
                            />
                        </div>
                    )}

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
