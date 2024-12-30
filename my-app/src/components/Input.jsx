const Input = ({ icon : Icon , label, ...props}) => {
    return (
        <div className="relative m-6">
            {label && <label className='text-gray-400 '>{label}</label>}
            <Icon className='absolute top-9 left-3 text-gray-400' size={20} />
                    <input
					{...props}
					className='w-full pl-10 pr-3 py-2 bg-transparent bg-opacity-50 rounded-lg border border-gray-700 focus:border-Spiro-blue-500 focus:ring-2 focus:ring-Spito-blue-500 text-white placeholder-gray-400 transition duration-200'
				/>
        </div>
    );
};
export default Input;