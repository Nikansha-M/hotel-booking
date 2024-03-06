import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-teal-900 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-4xl text-white font-bold tracking-tight">
                    <Link to="/">Vacays by Winston</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-in" className="flex bg-white items-center text-teal-900 px-3 font-bold hover:bg-slate-300">Sign In</Link>
                </span>
            </div>
        </div>
    );
}

export default Header;