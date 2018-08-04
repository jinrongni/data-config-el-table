export default {
    functional: true,
    props: ['row', 'col', 'column'],
    render(h, { props: { row, col }, _v: text }) {
        const { formater } = col;
        const v = formater && formater(row, col) || row[col.prop];

        return text && text(v) || v;
    }
};