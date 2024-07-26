import { StyledSeacrh, StyledSeacrhInput, StyledSeacrhIcon } from "./styles"
import { MdOutlineSearch } from "react-icons/md";
export const InputSearch = () => {
    const handleSearch = (e) => {
        console.log(e.target.value)
    }
    return (
        <StyledSeacrh>
            <StyledSeacrhInput type="text" placeholder="Search" onChange={handleSearch}/>
            <StyledSeacrhIcon>
                <MdOutlineSearch size="26px" />
            </StyledSeacrhIcon>
        </StyledSeacrh>

    )
}

