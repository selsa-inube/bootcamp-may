import { MdDone } from 'react-icons/md';
import { 
    StyledMessage,
    StyledText,
    StyledRead,
    StyledContainerMessage,
} from './styles'

export const Message = ({sender, text, read}) => {
    
    return (
        <StyledContainerMessage $sender={ sender }>
            <StyledMessage $sender={ sender }>
                <StyledText $sender={ sender }>
                    {text}
                </StyledText>
                {
                    sender || 
                        <div>
                            {
                                !read || <StyledRead> <MdDone size="40px" /> </StyledRead>
                            }
                        </div>
                }
            </StyledMessage>
        </StyledContainerMessage>
    )
}
