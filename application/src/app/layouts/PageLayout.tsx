'use client'

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <ChakraProvider>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <header className="bg-white shadow">
                    {/* Header content */}
                </header>
                <main className="flex-grow flex flex-col p-8">
                    {children}
                </main>
                <footer className="bg-gray-800 text-white py-4">
                    {/* Footer content */}
                </footer>
            </div>
        </ChakraProvider>
    );
};

export default PageLayout;
