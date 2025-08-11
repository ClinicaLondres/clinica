import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const theme = {
  primary: '#2E7D32',
  secondary: '#1E88E5',
  textDark: '#37474F',
  textLight: '#607D8B',
  background: '#F5F5F5',
  white: '#ffffff',
  lightGreenBg: '#E8F5E9',
};

// Datos de ejemplo para los artículos del blog
const blogPostsData = [
  { id: 1, title: "5 Técnicas de Mindfulness para Reducir la Ansiedad", category: "Salud Mental", img: "/image/blog_mindfulness.jpg", date: "10 de Agosto, 2025", excerpt: "Descubre cómo prácticas simples de mindfulness pueden ayudarte a calmar tu mente y reducir el estrés del día a día..." },
  { id: 2, title: "La Conexión entre Intestino y Cerebro", category: "Medicina Integrativa", img: "/image/blog_integrative.jpg", date: "1 de Agosto, 2025", excerpt: "La salud intestinal es clave para tu bienestar mental. Aprende cómo la medicina integrativa aborda esta conexión vital..." },
  { id: 3, title: "Entendiendo el TDAH en Adultos", category: "Salud Mental", img: "/image/blog_adhd.jpg", date: "28 de Julio, 2025", excerpt: "El TDAH no es solo cosa de niños. Conoce los síntomas y las estrategias de manejo para adultos..." },
];

const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 70px;
  background-color: ${theme.background};
`;

const HeroBanner = styled.div`
  background-color: ${theme.lightGreenBg};
  padding: 50px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${theme.primary};
  font-weight: 700;
  margin: 0;
`;

const BlogLayout = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 18px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? theme.primary : theme.white};
  color: ${props => props.active ? theme.white : theme.textDark};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.primary};
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const PostCard = styled(Link)`
  background: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.12);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PostCategory = styled.span`
  color: ${theme.secondary};
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const PostTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.3rem;
  color: ${theme.textDark};
  flex-grow: 1;
`;

const PostDate = styled.p`
  margin: 0;
  color: ${theme.textLight};
  font-size: 0.8rem;
`;

function BlogPage() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState(blogPostsData);
  const [filteredPosts, setFilteredPosts] = useState(blogPostsData);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', ...new Set(posts.map(post => post.category))];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'Todos') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  return (
    <PageContainer>
      <HeroBanner>
        <HeroTitle>{t('blogTitle', 'Nuestro Blog')}</HeroTitle>
      </HeroBanner>
      <BlogLayout>
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => handleFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        <PostsGrid>
          {filteredPosts.map(post => (
            <PostCard to={`/blog/${post.id}`} key={post.id}>
              <PostImage src={post.img} alt={post.title} />
              <PostContent>
                <PostCategory>{post.category}</PostCategory>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.date}</PostDate>
              </PostContent>
            </PostCard>
          ))}
        </PostsGrid>
      </BlogLayout>
    </PageContainer>
  );
}

export default BlogPage;
