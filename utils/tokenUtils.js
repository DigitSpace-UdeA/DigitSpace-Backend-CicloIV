import jwt from 'jsonwebtoken';

const validateToken = (token) => {
    if (token) {
        const verificacion = jwt.verify(token, 'secret', (err, data) => {
            if (data) {
                return { data: data };
            }
            if (err) {
                return {error: err};
            }
        });
        return verificacion;
    }
};

const generarToken = (payload) => {
    return jwt.sign(payload, 'secret', {
        expiresIn: '24h',
    });
};

export { generarToken, validateToken };