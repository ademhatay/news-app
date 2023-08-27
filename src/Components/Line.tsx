import { FC } from "react"
import { View, StyleSheet } from "react-native"



type ModalProps = {
    style?: object
}

const Line: FC<ModalProps> = ({style}) => {

    return <View style={{ alignItems: 'center' }}>
        <View style={[styles.line, style]} />
    </View>
}

const styles = StyleSheet.create({
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#333',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 10
    }
})



export default Line
