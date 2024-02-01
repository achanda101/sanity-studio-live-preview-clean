/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Stack, Card, Flex, Text } from '@sanity/ui'
import { MdOutlineOndemandVideo } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";

// Adds markup and invokes renderDefault()
export function EnhancedNavbar(props) {
    return (
        <Stack>
            <Card padding={3} tone="caution" style={{ backgroundColor: '#d61e28' }}>
                <Flex justify="space-between">
                    <Text>
                        <a href="nrityagram.org" style={{ textDecoration: 'none', color: 'white', fontSize: '0.85em' }}>
                            nrityagram.org
                        </a>
                    </Text>
                    <Text>
                        <a href="https://youtube.com" target="_blank" style={{ textDecoration: 'none', color: 'white', fontSize: '0.85em' }}>Video tutorials on how to use Sanity Studio&emsp;<MdOutlineOndemandVideo /></a>
                    </Text>
                </Flex>
            </Card>
            <>{props.renderDefault(props)}</>
        </Stack >
    )
}
