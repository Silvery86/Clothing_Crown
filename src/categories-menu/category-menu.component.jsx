import './category-menu.styles.scss';
import CategoryItem from '../categories/category-item.component'

export default function CategoryMenu({categories}) {
    
  return (
    <div className='categories-menu-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
         ))}   
    </div>
  )
}
