

const ImageContainer = ({ src, name, description }: { src: string, name: string, description: string }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between card   ">
            <div>
                <img src={src} alt="Product 4" className="object-cover mb-4 rounded-lg h-[400px] w-[400px]" />
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
            <button className="text-white bg-black rounded-md px-4 py-2 transition-all duration-300 hover:bg-gray-800">Shop Now</button>
        </div>
    )
}

export default ImageContainer
