import { FC, ReactNode } from "react"
import {  Modal, Text, View, StyleSheet } from "react-native"



type ModalProps = {
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
    children: ReactNode
}

const AppModal: FC<ModalProps> = ({ modalVisible, children }) => {   

    return <>
        <Modal visible={modalVisible} transparent={true} animationType='fade' >
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Menu</Text>
                    <View style={styles.line} />
                    {children}
                </View>
            </View>
        </Modal>
    </>
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    wrapper: { backgroundColor: 'white', width: '80%', height: '55%', borderRadius: 15, padding: 20 },
    title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
    line: { borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 10 },
})



export default AppModal
