import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
  _id: string;
  category_name: string;
  category_image: string;
  status: number;
}

const bgColors = [
  'bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100',
  'bg-purple-100', 'bg-pink-100', 'bg-indigo-100', 'bg-emerald-100', 'bg-orange-100'
];

const getRandomBgColor = (): string => {
  const i = Math.floor(Math.random() * bgColors.length);
  return bgColors[i];
};

const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState<Category[]>([
    {
      _id: '1',
      category_name: 'AC Repair',
      category_image: 'https://images.pexels.com/photos/1543763/pexels-photo-1543763.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 1
    },
    {
      _id: '2',
      category_name: 'Plumbing',
      category_image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 1
    },
    {
      _id: '3',
      category_name: 'Electrical',
      category_image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 1
    },
    {
      _id: '4',
      category_name: 'House Cleaning',
      category_image: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 0
    }
  ]);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="flex-1 p-8 ml-64">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
              Most Popular Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allCategories.filter(category => category?.status === 1).map((category, index) => {
                const bgColor = getRandomBgColor();
                return (
                  <div
                    key={category._id}
                    className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
                  >
                    <div
                      className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 hover:scale-110`}
                    >
                      <img
                        src={category.category_image}
                        alt={category.category_name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-700 text-center leading-tight">
                      {category.category_name}
                    </h3>
                  </div>
                );
              })}
            </div>
            
            <div className='mt-12'>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                Upcoming Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allCategories.filter(category => category?.status === 0).map((category, index) => {
                  const bgColor = getRandomBgColor();
                  return (
                    <div
                      key={category._id}
                      className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
                    >
                      <div
                        className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 hover:scale-110`}
                      >
                        <img
                          src={category.category_image}
                          alt={category.category_name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-700 text-center leading-tight">
                        {category.category_name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface Category {
//   _id: string;
//   category_name: string;
//   category_image: string;
//   status: number;
// }

// const bgColors = [
//   'bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100',
//   'bg-purple-100', 'bg-pink-100', 'bg-indigo-100', 'bg-emerald-100', 'bg-orange-100'
// ];

// const getRandomBgColor = (): string => {
//   const i = Math.floor(Math.random() * bgColors.length);
//   return bgColors[i];
// };

// const CategoriesPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [allCategories, setAllCategories] = useState<Category[]>([
//     {
//       _id: '1',
//       category_name: 'AC Repair',
//       category_image: 'https://images.pexels.com/photos/1543763/pexels-photo-1543763.jpeg?auto=compress&cs=tinysrgb&w=100',
//       status: 1
//     },
//     {
//       _id: '2',
//       category_name: 'Plumbing',
//       category_image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=100',
//       status: 1
//     },
//     {
//       _id: '3',
//       category_name: 'Electrical',
//       category_image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=100',
//       status: 1
//     },
//     {
//       _id: '4',
//       category_name: 'House Cleaning',
//       category_image: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=100',
//       status: 0
//     }
//   ]);
//   const [error, setError] = useState<string | null>(null);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
//         Most Popular Categories
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {allCategories.filter(category => category?.status === 1).map((category, index) => {
//           const bgColor = getRandomBgColor();
//           return (
//             <div
//               key={category._id}
//               className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
//             >
//               <div
//                 className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 hover:scale-110`}
//               >
//                 <img
//                   src={category.category_image}
//                   alt={category.category_name}
//                   className="w-12 h-12 object-contain"
//                 />
//               </div>
//               <h3 className="text-sm font-medium text-gray-700 text-center leading-tight">
//                 {category.category_name}
//               </h3>
//             </div>
//           );
//         })}
//       </div>
      
//       <div className='mt-12'>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
//           Upcoming Categories
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {allCategories.filter(category => category?.status === 0).map((category, index) => {
//             const bgColor = getRandomBgColor();
//             return (
//               <div
//                 key={category._id}
//                 className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
//               >
//                 <div
//                   className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 hover:scale-110`}
//                 >
//                   <img
//                     src={category.category_image}
//                     alt={category.category_name}
//                     className="w-12 h-12 object-contain"
//                   />
//                 </div>
//                 <h3 className="text-sm font-medium text-gray-700 text-center leading-tight">
//                   {category.category_name}
//                 </h3>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;