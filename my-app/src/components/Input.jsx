const Input = ({ icon : Icon , label, ...props}) => {
    return (
        <div className="relative text-start mb-2 ">
            {label && <label className='text-black text-sm md:text-small  px-1'>{label}</label>}
                    <input
					{...props}
					className='w-full pl-2 py-2 bg-transparent rounded-sm border border-black focus:border-Spiro-blue-500 focus:ring-2 focus:ring-Spito-blue-500 text-black placeholder-gray-400 transition duration-200'
				/>
        </div>
    );
};
export default Input;