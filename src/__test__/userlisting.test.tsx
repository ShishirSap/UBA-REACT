import { render, screen } from '@testing-library/react';
import UserListingPage from '../pages/userListingPage';
import profileimg from '../assets/profilelogo.webp'


jest.mock('../components/Navbar',()=>()=><div data-testid="navbar">Mock Navbar</div>)
describe('UserlistingPage', () => {

  test('renders Navbar component',()=>{
    render(<UserListingPage/>)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  test('renders user details in each card',()=>{
    render(<UserListingPage/>)

    const cards=screen.getAllByTestId('user-card')
    cards.forEach((card)=>{
      expect(card).toHaveTextContent('Name:')
      expect(card).toHaveTextContent('Sapkota');
      expect(card).toHaveTextContent('Address:');
      expect(card).toHaveTextContent('Imadol, Kathmandu');
      expect(card).toHaveTextContent('Email:');
      expect(card).toHaveTextContent('shishirsap@gmail.com');
      expect(card.querySelector('img')).toHaveAttribute('src', profileimg);
    })
  })
  
})
