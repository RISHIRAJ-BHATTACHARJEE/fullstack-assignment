import Card from "../models/cardModel.js";

export const createCard = async (req, res) => {
    try {
        const {title, description} = req.body;
        if(!title || !description) {
            return res.status(400).send("Title and Description are required");
        }

        await Card.create({
            title,
            description
        });

        return res.status(201).send("Card Created Successfully");
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    }
}

export const getCards = async (req, res) => {
    try {
        const card = await Card.find();
        return res.status(200).send(card);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    }

}

export const getSingleCard = async (req, res) => {
    try {
        const { title } = req.params;
        const card = await Card.find({ title: title });
        console.log("getSpec", card);

        if (!card) {
            return res.status(404).send("Card not found");
        }

        return res.status(200).json(card);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    }
};
