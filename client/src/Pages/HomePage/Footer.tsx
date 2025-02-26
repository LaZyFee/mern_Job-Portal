export const Footer = () => {
    return (
        <footer className="bg-mine-shaft-900 text-mine-shaft-300 py-10 mt-20">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 gap-10">
                    {/* JobHook Section */}
                    <div>
                        <h2 className="text-xl font-bold text-bright-sun-400 flex items-center gap-2">
                            <span>⚓</span> JobHook
                        </h2>
                        <p className="mt-2 text-sm">
                            Job portal with user profiles, skill updates, certifications, work experience, and admin job postings.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            <span className="p-2 rounded-full bg-mine-shaft-700 text-bright-sun-400 cursor-pointer">
                                📷
                            </span>
                            <span className="p-2 rounded-full bg-mine-shaft-700 text-bright-sun-400 cursor-pointer">
                                📩
                            </span>
                            <span className="p-2 rounded-full bg-mine-shaft-700 text-bright-sun-400 cursor-pointer">
                                ▶️
                            </span>
                        </div>
                    </div>

                    {/* Product Section */}
                    <div>
                        <h3 className="text-lg font-bold text-bright-sun-400">Product</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>Find Job</li>
                            <li>Find Company</li>
                            <li>Find Employee</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-bold text-bright-sun-400">Company</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-lg font-bold text-bright-sun-400">Support</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>Help & Support</li>
                            <li>Feedback</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-mine-shaft-700 mt-6 pt-4 text-center">
                    <p>
                        Designed & Developed By{" "}
                        <span className="text-bright-sun-400 font-bold">Rabiul Rafee || 2025</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
