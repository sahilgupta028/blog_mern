import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const  username = localStorage.getItem('username');

    const logout = () => {
        localStorage.clear();
        router.push('/');
    }
    return (
      <nav className="bg-black p-4 flex ">
        <div className="container mx-auto flex justify-evenly">
          <h1 className="text-white text-2xl font-bold font-serif underline">Welcome @{username}</h1>
          <div className="flex space-x-4">
            <Link href="/create">
              <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                Create your Post
              </button>
            </Link>
            <Link href="/posts">
              <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                See All Posts
              </button>
            </Link>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
