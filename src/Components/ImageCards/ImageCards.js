import { BottomImage, BottomSection, BottomText, TopText } from "./ImageCardsStyled";
import car1 from "./car1.jpg";
import car2 from "./car2.jpg";
import car3 from "./car3.jpg";

const ImageCards = () => {
    return (
        <>
        <BottomSection>
            <BottomImage>
            <img src={car1} alt="image" className="BottomImage"/>
                <TopText>
                    BUY NOW
                </TopText>
                <BottomText>
                    $11,950
                </BottomText>
            </BottomImage>

            <BottomImage>
            <img src={car2} alt="image" className="BottomImage"/>
                <TopText>
                    BUY NOW
                </TopText>
                <BottomText>
                    $13,450
                </BottomText>
            </BottomImage>

            <BottomImage>
            <img src={car3} alt="image" className="BottomImage"/>
                <TopText>
                    BUY NOW
                </TopText>
                <BottomText>
                    $14,450
                </BottomText>
            </BottomImage>

        
        </BottomSection>
        </>
    )
}
export default ImageCards;