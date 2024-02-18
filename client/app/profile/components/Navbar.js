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
      <nav className="bg-gradient-to-r from-purple-900 to-blue-900 p-4 flex">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white text-2xl font-bold font-serif underline">Welcome @{username}</h1>
    <div className="flex space-x-4">
      <Link href="/create">
        <button className="text-white hover:bg-purple-700 px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
          Create your Post
        </button>
      </Link>
      <Link href="/posts">
        <button className="text-white hover:bg-purple-700 px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
          See All Posts
        </button>
      </Link>
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
</nav>
    );
  };

export default Navbar;
