import Layout from '../../components/layout';

export default function handler(req, res) {
    <Layout>
        return {res.status(200).json({text: "Hello"})};
    </Layout>
}