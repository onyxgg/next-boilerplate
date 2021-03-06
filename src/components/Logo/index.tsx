import { Box } from "@chakra-ui/react";

export type LogoProps = {
    color?: "white" | "black";
    size?: "small" | "medium" | "large";
    hideText?: boolean;
};

const logoModifiers = {
    small: "3xs",
    medium: "xs",
    large: "md",
};

const Logo = ({
    color = "white",
    size = "medium",
    hideText = false,
}: LogoProps) => {
    return (
        <Box color={color} width={logoModifiers[size]}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMaxYMid meet"
                viewBox="0 0 267 90"
                className="iconLeft"
                role="img"
                aria-label="Onyx"
            >
                <path
                    display={hideText ? "none" : "block"}
                    d="M113.575 38.299c0 13.13 9.39 23.337 22.715 23.337 12.896 0 22.636-10.207 22.636-23.337 0-13.17-10.169-23.299-22.636-23.299-12.39 0-22.715 10.13-22.715 23.299zm11.065 0c0-6.702 3.74-13.442 11.65-13.442 7.948 0 11.532 6.74 11.532 13.442 0 6.701-3.35 13.402-11.532 13.402-8.416 0-11.65-6.701-11.65-13.402zm38.805 22.52h9.663V45c0-2.766 2.805-5.455 5.727-5.455 3.078 0 4.987 2.689 4.987 5.455v15.818h9.662V42.39c0-7.793-7.13-10.364-12.272-10.364-3.04 0-5.844 1.558-8.026 3.74h-.078v-2.922h-9.663zm57.273-27.975l-6.662 14.338-7.792-14.338H195.12l13.247 23.61L198.744 75h11.104l21.974-42.156zm45.702 27.974l-11.962-14.61 10.286-13.364h-11.299l-4.87 6.468-4.83-6.468h-11.3l10.247 13.364-11.96 14.61h11.688l6.155-7.909 6.156 7.91z"
                    fill="currentColor"
                    className="text"
                />
                <g fill="currentColor">
                    <path d="M54.166 60.78L49.48 74.22v-.247H12.125L32.837 90h28.48l12.082-37.356-13.315-9.617z" />
                    <path d="M58.974 38.959l17.26 12.575-11.712 36.124 20.712-15.042 8.754-27.123-31.685-22.931-12.945 9.37z" />
                    <path d="M93.125 41.795l-7.89-24.288L62.178.863 30.741 23.671l4.932 15.288 26.63-19.48z" />
                    <path d="M34.686 42.904L28.03 22.438 58.358 0H32.837L9.782 17.014l11.96 37.233h16.273l-3.329-11.343z" />
                    <path d="M41.344 56.712H20.015L8.303 20.836.413 44.753l8.876 26.754h38.836l5.054-14.795z" />
                </g>
            </svg>
        </Box>
    );
};

export default Logo;
