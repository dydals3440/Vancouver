import React, { useState } from 'react';
import styled from 'styled-components';

// 값을 전달하지 않아, images는 undefined가 된다. 그래서 images=[]를 사용하여 빈 배열로 초기화 해주어야, 0번쨰 값에 참조할 수 있다. 참조 에러가 핸들링!
// 또한 url도 못읽어주기 때문에, 초깃 값을 url도 배열안에서 초기화 해주어야 한다.
const ProductImages = ({ images = [{ url: '' }] }) => {
  // 첫번쨰 이미지가, 슬라이더의 메인 화면이 됨
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main.url} alt='main' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
