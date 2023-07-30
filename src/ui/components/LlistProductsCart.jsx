
import { useDispatch, useSelector } from "react-redux"
import { startDecrementUnitCart, startDeleteProductCart, startIncrementProduct, startLoading } from "../../store/techzzi";
import { AiFillDelete } from 'react-icons/ai'

export const ListProductsCart = () => {

    const dispatch = useDispatch();

    const {unitCart, productsInCart, isSaving} = useSelector(state => state.techzzi);

    const onAddUnitProduct = (idProduct) => {
        dispatch(startLoading())
        setTimeout(() => {
            dispatch(startIncrementProduct(idProduct))
        }, 200);
    }

    const onDecrementUnitProduct = (idProduct) => {
        dispatch(startLoading())
        setTimeout(() => {
            dispatch(startDecrementUnitCart(idProduct))
        }, 200);
    }

    const onDeleteProduct = (idProduct) => {
        dispatch(startLoading())
        setTimeout(() => {
            dispatch(startDeleteProductCart(idProduct))
        }, 200);
    }

    return (
        <>
            {
                productsInCart.map((product) => {
                    return (
                        <div key={product.id} className="flex items-center border-b border-gray-300 dark:border-slate-50/[0.16] pt-2 pb-1">
                            <img src={`/src/assets/images/${product.type}/${product.image}`} className='w-20 h-20 ' alt={product.name}/>
                            <div className="ml-3">
                                <p className="text-slate-800 dark:text-white font-bold text-xs">{product.name}</p>
                                <p className="text-cyan-400 font-bold text-xs mt-1 mb-2">${product.price.toFixed(2)}</p>
                                <div className="flex items-center space-x-3">
                                    <button 
                                        onClick={() => onDecrementUnitProduct(product.id)}
                                        disabled={(product.unit === 1)}
                                        className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                        </svg>
                                    </button>
                                    <div>
                                        <p className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {product.unit}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => onAddUnitProduct(product.id)}
                                        className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button 
                                onClick={ () => onDeleteProduct(product.id) }
                                className=" ml-auto mr-2 bg-red-600 rounded-lg p-2 shadow-lg hover:opacity-90">
                                <AiFillDelete className="text-white text-md"/>
                            </button>
                        </div>
                    )
                })
            }

        </>

    )
}
