import React, { useState } from 'react';
import userEvent from "@testing-library/user-event";
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import LikeDislikeButton from './LikeDislikeButton';



  describe('LikeDislikeButton', () => {
    test('rederizando o botão em tela', () => {
      render (<LikeDislikeButton />);
      const butttom = screen.getByRole('button');
      expect(butttom).toBeInTheDocument();
    });



    test('Exibir o botão em tela', () => {
      render (<LikeDislikeButton label="Curtir" />);

      const butttom = screen.queryByText('Curtir');
      expect(butttom).toBeInTheDocument();
    });

    test('Chamar a função passada com prop aoClicar quando clicado', async () => {
      const user = userEvent.setup();
      const darLike = jest.fn();

      render(<LikeDislikeButton label="Botão" aoClicar={darLike} />);

      const butttom = screen.getByRole('button');
      user.click(butttom);

      const button = screen.getByRole("button");

      // ACT
      await user.click(button);
  
      // ASSERT
      expect(darLike).toBeCalled();
    });
  });