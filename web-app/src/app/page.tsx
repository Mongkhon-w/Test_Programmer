import RecipeCard, { RecipeProps } from '@/components/RecipeCard';

const recipesData: RecipeProps[] = [
  { 
    id: 1, 
    title: "ข้าวผัดหมู", 
    time: "15 นาที", 
    servings: 2, 
    img: "/01.png",
    description: "ข้าวผัดเม็ดร่วน หอมกลิ่นกระทะ คลุกเคล้ากับหมูชิ้นนุ่มๆ และไข่"
  },
  { 
    id: 2, 
    title: "ผัดกะเพราหมูสับ", 
    time: "10 นาที", 
    servings: 2, 
    img: "/02.png",
    description: "เมนูสิ้นคิดแต่อร่อยสุดใจ เผ็ดจัดจ้าน หอมกลิ่นใบกะเพราแท้ๆ"
  },
  { 
    id: 3, 
    title: "ผัดซีอิ๊วหมู", 
    time: "20 นาที", 
    servings: 2, 
    img: "/03.png",
    description: "เส้นใหญ่เหนียวนุ่ม ผัดกับยอดคะน้ากรอบๆ และซีอิ๊วดำหอมหวาน"
  },
  { 
    id: 4, 
    title: "ผัดไทยกุ้งสด", 
    time: "25 นาที", 
    servings: 2, 
    img: "/04.png",
    description: "เส้นจันท์เหนียวนุ่ม ผัดซอสมะขามเข้มข้น จัดเต็มกับกุ้งตัวโตๆ"
  },
  { 
    id: 5, 
    title: "ส้มตำไทย", 
    time: "15 นาที", 
    servings: 2, 
    img: "/05.png",
    description: "ส้มตำรสแซ่บ เปรี้ยวหวานลงตัว มะละกอกรอบ คลุกเคล้าถั่วลิสงคั่วใหม่"
  }
];

export default function Home() {
  return (
    <main className="container">
      <h1>RECOMMENDED<br /><strong>เมนูอาหารแนะนำ</strong></h1>
      <div className="recipe-grid">
        {recipesData.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
