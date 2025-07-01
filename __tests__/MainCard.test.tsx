import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MainCard from "../components/MainCard";

describe("MainCard", () => {
  it("deve renderizar o título corretamente", () => {
    const { getByText } = render(
      <MainCard
        title="Test Card"
        image="https://example.com/image.jpg"
        onPress={() => {}}
      />
    );
    expect(getByText("Test Card")).toBeTruthy();
  });

  it("deve chamar onPress quando clicado", () => {
    const mockPress = jest.fn();
    const { getByRole } = render(
      <MainCard
        title="Clickable Card"
        image="https://res.cloudinary.com/dvqbwddan/image/upload/v1747511829/projeto%20SKT/case/Killowatt%20Case.png.png"
        onPress={mockPress}
      />
    );

    fireEvent.press(getByRole("button"));
    expect(mockPress).toHaveBeenCalled();
  });

  it("deve renderizar a imagem", () => {
    const { getByRole } = render(
      <MainCard
        title="Image Card"
        image="https://res.cloudinary.com/dvqbwddan/image/upload/v1747511829/projeto%20SKT/case/Killowatt%20Case.png.png"
        onPress={() => {}}
      />
    );

    expect(getByRole("image")).toBeTruthy();
  });
});
