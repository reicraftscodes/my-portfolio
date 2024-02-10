import { useRouter } from 'next/router';
import Image from 'next/image';


const NotFoundPage = () => {
    const router = useRouter();

    const redirectToHomepage = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src={"/images/zicon.png"}
                width={70}
                height={70}
                alt="LMS logo"
            ></Image>
            <p className="text-2xl font-bold text-gray-700 text-center mb-4">Oopps...that page does not exists</p>
            <p className="text-lg text-gray-700 text-center">Sorry, the page you are looking for could not be found. </p>

            <button
                className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-700  text-white rounded-md cursor-pointer"
                onClick={redirectToHomepage}
            >
                Go Home
            </button>
        </div>
    );
};

export default NotFoundPage;