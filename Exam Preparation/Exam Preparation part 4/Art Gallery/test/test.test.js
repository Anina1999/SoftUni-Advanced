import { assert } from "chai";
import { artGallery } from "../artGallery.js";

describe('unit tests for artGallery class', () => {
    describe('addArtwork', () => {
        it('throws if title and artist are non-strings', () => {
            assert.throws(() => artGallery.addArtwork(123, '30 x 40', 'Van Gogh'), 'Invalid Information!');
            assert.throws(() => artGallery.addArtwork('Sunflowers', '30 x 40', 5), 'Invalid Information!');
            assert.throws(() => artGallery.addArtwork({}, '30 x 40', 'Van Gogh'), 'Invalid Information!');
        });

        it('throws if artist is incorrect', () => {
            assert.throws(
                () => artGallery.addArtwork('Sunflowers', '30 x 40', 'Da Vinci'),
                'This artist is not allowed in the gallery!'
            );
        });

        it('throws if dimensions format is invalid', () => {
            assert.throws(() => artGallery.addArtwork('Sunflowers', '30x40', 'Van Gogh'), 'Invalid Dimensions!');
            assert.throws(() => artGallery.addArtwork('Sunflowers', '-30 x 40', 'Van Gogh'), 'Invalid Dimensions!');
            assert.throws(() => artGallery.addArtwork('Sunflowers', 'x 40', 'Van Gogh'), 'Invalid Dimensions!');
        });

        it('if input is valid, return message', () => {
            assert.equal(
                artGallery.addArtwork('Sunflowers', '30 x 40', 'Van Gogh'),
                "Artwork added successfully: 'Sunflowers' by Van Gogh with dimensions 30 x 40."
            );
        });
    });

    describe('calculateCosts', () => {
        it('throws if exhibitionCosts or insuranceCosts are NaN or negative', () => {
            assert.throws(() => artGallery.calculateCosts('123', 1, true), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(1, '1234', true), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(-2, 3, true), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(5, -4, true), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(-5, -4, true), 'Invalid Information!');
        });

        it('throws if sponsor is non-boolean', () => {
            assert.throws(() => artGallery.calculateCosts(2, 3, 2), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(1, 4, 'string'), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(1, 4, []), 'Invalid Information!');
        });

        it('if sponsor is true, return a message', () => {
            assert.equal(
                artGallery.calculateCosts(2, 3, true),
                "Exhibition and insurance costs are 4.5$, reduced by 10% with the help of a donation from your sponsor."
            );
        });

        it('if sponsor is false, return a message', () => {
            assert.equal(
                artGallery.calculateCosts(2, 3, false),
                "Exhibition and insurance costs are 5$."
            );
        });
    });

    describe('organizeExhibits', () => {
        it('throws if artworksCount or displaySpacesCount are NaN or negative', () => {
            assert.throws(() => artGallery.organizeExhibits('10', 2), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(10, -2), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(-10, 5), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(0, 5), 'Invalid Information!');
        });

        it('returns message when artworksPerSpace is less than 5', () => {
            assert.equal(
                artGallery.organizeExhibits(10, 3),
                "There are only 3 artworks in each display space, you can add more artworks."
            );
        });

        it('if inputs are valid, return a message', () => {
            assert.equal(
                artGallery.organizeExhibits(10, 2),
                "You have 2 display spaces with 5 artworks in each space."
            );
        });
    });
});